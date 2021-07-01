import { useEffect, useRef, useState } from 'react'
import { ForceGraph2D } from 'react-force-graph'
import HubData from '../../lib/HubData'

export default function HubEngine() {
    const containerRef = useRef<null | HTMLDivElement>(null)
    const [graphWidth, setGraphWidth] = useState(0)

    const updateGraphWidth = () => {
        if (containerRef && containerRef.current) {
            setGraphWidth(containerRef.current.offsetWidth)
        }
    }

    const parseHubData = () => {
        const nodes = [
            {
                id: HubData.main
            },
            ...HubData.nodes.map((actorName) => ({ id: actorName }))
        ]
        const links = nodes.
            filter((currentNode) => currentNode.id != HubData.main)
            .map((currentNode) => ({
                source: HubData.main,
                target: currentNode.id
            }))
        return { links, nodes }
    }

    useEffect(() => {
        updateGraphWidth()

        window.addEventListener('resize', updateGraphWidth)

        return () => window.removeEventListener('resize', updateGraphWidth)

    }, [containerRef])

    return <div ref={containerRef}>
        <ForceGraph2D
            dagMode="radialout"
            dagLevelDistance={600}
            width={graphWidth}
            enableZoomInteraction={false}
            nodeLabel="id"
            nodeId="id"
            nodeAutoColorBy="module"
            linkDirectionalParticles={1}
            linkDirectionalParticleWidth={2}
            d3VelocityDecay={0.99}
            enablePanInteraction={false}
            nodeCanvasObject={(node, ctx) => {
                const { x, y } = node;
                const text = node.id?.toString() || "error"

                if (node.id === HubData.main) {
                    const boxWidth = text?.length * 5.6 < 40
                        ? 40
                        : text?.length * 5.6

                    ctx.fillStyle = "green"
                    ctx.fillRect(x as number - (boxWidth / 2), y as number - 11, boxWidth, 22)
                }

                ctx.fillStyle = "black"; //Primary White
                ctx.font = '10px Sans-Serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text || "Error", x as number, y as number);
            }}
            graphData={parseHubData()}

        /></div>
}
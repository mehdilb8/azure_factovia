async function request(method: string, url: string, body?: string, jwt?: string) {
    let headers = {}

    if (typeof body === "string" || typeof body === "undefined") {
        //@ts-ignore
        headers['Content-Type'] = "application/json"
    }

    if (jwt) {
        //@ts-ignore
        headers.Authorization = `Bearer ${jwt}`
    }

    const fetchRepsonse = await fetch(url, {
        method,
        body,
        headers
    });

    if (!fetchRepsonse.ok) {
        throw await fetchRepsonse.text();
    }

    return fetchRepsonse.json();
}

export async function get<ResponseType extends object>(url: string): Promise<ResponseType> {
    return await request("GET", url);
}

export async function post<ResponseType extends object, PayloadType extends object = {}>(url: string, body: PayloadType, jwt?: string): Promise<ResponseType> {
    const strBody = JSON.stringify(body)
    return await request("POST", url, strBody, jwt);
}

export async function update<ResponseType extends object, PayloadType extends object = {}>(url: string, body: PayloadType): Promise<ResponseType> {
    const strBody = JSON.stringify(body)
    return await request("PUT", url, strBody);
}

export async function remove<ResponseType extends object>(url: string): Promise<ResponseType> {
    return await request("DELETE", url);
}

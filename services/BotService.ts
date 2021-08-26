import { BotAuthResponse } from '../types/Bot'
import { post } from '../utils/httpRequest'

export default class BotService {
    public static async auth() {
        return await post<BotAuthResponse>("https://directline.botframework.com/v3/directline/tokens/generate", {}, "1jfXxrpvvRo.kCMIBNSgieoGctQ8Q-U5cZ_8E7PV-4FMes-4qKftufc")
    }
}
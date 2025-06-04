import billMateClient, { billMateApiResponse } from "./billMateClient";



const baseURL = "/auth"

export const apiLogin = async (username: string, password: string): Promise<billMateApiResponse> => {
    const response = await billMateClient.post<any>(
        `${baseURL}/login`,
        { username: username, password: password }
    );
    return { status: response.status, payload: response.data };
}
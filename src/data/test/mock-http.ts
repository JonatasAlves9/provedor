import {HttpClient, HttpRequest, HttpResponse, HttpStatusCode} from '@/data/protocols/http';

export const mockHttpRequest = (): HttpRequest => ({
    url: '/teste',
    method: 'get',
    body: null,
    headers: null,
});

export class HttpClientSpy<R = any> implements HttpClient<R> {
    url?: string;
    method?: string;
    body?: any;
    headers?: any;
    response: HttpResponse<R> = {
        statusCode: HttpStatusCode.ok,
    };

    async request(data: HttpRequest): Promise<HttpResponse<R>> {
        this.url = data.url;
        this.method = data.method;
        this.body = data.body;
        this.headers = data.headers;
        return this.response;
    }
}

import http from '@/http'

class EventDataService {
    getAll(): Promise<any> {
        return http.get("/events");
    }

    get(id: any): Promise<any> {
        return http.get(`/events/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/events", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/events/${id}`, data);
    }

    delete(id: any): Promise<any> {
         return http.delete(`/events/${id}`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/events?title=${title}`);
    }
}

export default new EventDataService();
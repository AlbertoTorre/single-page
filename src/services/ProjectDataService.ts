import http from '@/http'

class ProjectDataService {
    getAll(): Promise<any> {
        return http.get("/projects");
    }

    get(id: any): Promise<any> {
        return http.get(`/projects/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/projects", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/projects/${id}`, data);
    }

    delete(id: any): Promise<any> {
         return http.delete(`/projects/${id}`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/projects?title=${title}`);
    }

    findByFeatured(featured: boolean): Promise<any> {
        return http.get(`/projects?featured=${featured}`);
    }
}

export default new ProjectDataService();
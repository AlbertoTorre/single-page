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

    findByFeatured(featured: number): Promise<any> {
        return http.get(`/projects/featureds/${featured}`);
    }
}

export default new ProjectDataService();
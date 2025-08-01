import { HttpClient } from "@lib/http-client";
import { SuccessResponse } from "types/models";
import { CreateProjectDto, QueryProjectDto } from "./models";



export class ProjectService {
    private readonly baseUrl = "/v1/projects";
    
    constructor(private readonly http: HttpClient) {}

    async createProject(payload: CreateProjectDto): Promise<SuccessResponse<QueryProjectDto>> {
        return this.http.post<
        CreateProjectDto, 
        SuccessResponse<QueryProjectDto>
        >(`${this.baseUrl}`, payload);
    }
}

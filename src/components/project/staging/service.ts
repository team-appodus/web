import { HttpClient } from "@lib/http-client";
import { SuccessResponse } from "types/models";
import { UpsertProjectStagingDto, QueryProjectStagingDto } from "./models";



export class ProjectStagingService {
    private readonly baseUrl = "/v1/projects/staging";

    constructor(private readonly http: HttpClient) {}

    async upsertProjectStaging(payload: UpsertProjectStagingDto): Promise<SuccessResponse<QueryProjectStagingDto>> {
        return this.http.post<
        UpsertProjectStagingDto, 
        SuccessResponse<QueryProjectStagingDto>
        >(`${this.baseUrl}`, payload);
    }
}

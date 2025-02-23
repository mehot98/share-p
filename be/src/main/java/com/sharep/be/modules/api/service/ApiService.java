package com.sharep.be.modules.api.service;

import com.sharep.be.modules.api.Api;
import com.sharep.be.modules.api.ApiRequest.ApiCreate;
import com.sharep.be.modules.api.ApiRequest.ApiUpdate;
import java.util.List;

public interface ApiService {

    List<Api> getApis(Long projectId);

    Api createApi(ApiCreate apiCreate);

    void updateApi(Long apiId, ApiUpdate apiUpdate);

    void deleteApi(Long apiId);
}

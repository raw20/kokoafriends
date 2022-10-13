package kokoafriends.back;

import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.DefaultResponseErrorHandler;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

public class MyErrorHandler extends DefaultResponseErrorHandler {
    @Override
    public void handleError(ClientHttpResponse response) throws IOException {
        // your error handling here
    }

    @Override
    public boolean hasError(ClientHttpResponse response) throws IOException {

        return false;
    }


    public static void main(String args[]) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setErrorHandler(new MyErrorHandler());
    }
}


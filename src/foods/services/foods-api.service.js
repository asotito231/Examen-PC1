import axios from "axios";

const http = axios.create({
    baseURL: 'https://pe.openfoodfacts.org/api/v0/product/8410109050509',
});

export class FoodsApiService {
    getFood() {
        return http.get();
    }
}
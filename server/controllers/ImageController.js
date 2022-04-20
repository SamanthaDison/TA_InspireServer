import { axiosService } from "../services/AxiosService";
import BaseController from "../utils/BaseController";

export class ImageController extends BaseController {
    constructor() {
        super('api/images')
        this.router
            .get('', this.getImage)
    }
    async getImage(req, res, next) {
        try {
            const image = await axiosService.getImage()
            res.send(image.data)
        } catch (error) {
            next(error)
        }
    }
}
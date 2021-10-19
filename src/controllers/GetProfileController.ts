import {Request, Response} from 'express';
import { GetProfileUserService } from '../services/GetProfileUserService';

export class GetProfileUserController{
  async handle(request: Request, response: Response){
    const {user_id} = request;
    const getProfileUserService = new GetProfileUserService();
    const result = await getProfileUserService.execute(user_id);

    return response.json(result);
  }
}
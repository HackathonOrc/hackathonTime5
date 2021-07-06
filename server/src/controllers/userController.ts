import { Request, Response } from 'express';
import User from '../schemas/userSchema';

export default class userController {
    createUser = async (req: Request, res: Response) => {
        try {
            await User.create(req.body);
            res.status(200).json({ message: 'Usuário criado com sucesso' });
        } catch (error) {
            res.status(400).json({ messahe: 'Ocorreu um erro ao criar o usuário' });
        }
    }
    getAllUsers = async (req: Request, res: Response) => {
        try {
            const response = await User.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: 'Ocorreu um erro ao pegar todos os usuários' });
        }
    }
    getOneUser = async (req: Request, res: Response) => {
        try {
            const item = await User.findById(req.params.id);
            if(!item){
                res.status(400).json({message: 'Usuário não encontrado'});
            }
        } catch (error) {
            res.status(400).json({message: 'Erro ao pegar usuário'});
        }
    }
    updateUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if(!user)
                res.status(400).json({message: 'Não foi possível atualizar o usuário'})
            
            await User.updateOne(req.body);
            res.status(200).json({ error : 'Usuário atualizado com sucesso'});
        } catch (error) {
            res.status(400).json({ error: 'Ocorreu um erro ao atualizar o usuário'})
        }
    }
    deleteUser = async (req: Request, res: Response) =>{
        try {
            await User.findByIdAndDelete(req.params.id);
        } catch (error) {
            res.status(200).json({ message: 'Usuário deletado com sucesso'});
        }
    }
}
import { Request, Response } from 'express';
import FinalQuestions from '../schema/finalQuestionSchema'; // importar do nosso próprio schema

export default class questionsControllers { // mudar pra like controller
    createQuestions = async (req: Request, res: Response) => {
        try {
            await FinalQuestions.create(req.body);
            res.status(200).json({ message: 'Questão criada com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Ocorreu um erro ao criar a questão!' });
        }
    }
    // pega e retosna todos os elementos que existem em formato json
    getAllQuestions = async (req: Request, res: Response) => {
        try {
            const response = await FinalQuestions.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: 'Ocorreu um erro ao pegar todas as questões!' });
        }
    }
    // pega pelo id um item específico do banco 
    getOneQuestion = async (req: Request, res: Response) => {
        try {
            const item = await FinalQuestions.findById(req.params.id);
            if (!item) {
                res.status(400).json({ message: 'Questão não encontrada' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao pegar questão!' });
        }
    }
    // atualizar um item do banco
    updateQuestions = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const question = await FinalQuestions.findById(id);
            if (!question)
                res.status(400).json({ message: 'Não foi possível encontrar a questão!' });

            await question.updateOne(req.body);
            res.status(200).json({ message: 'Questão atualizada!' });
        } catch (error) {
            res.status(400).json({ message: 'Ocorreu um problema ao atualizar as questões!' });
        }
    }
    // atualizar com base no usuário
    updateQuestionsUser = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const question = await FinalQuestions.findById(id);

            if (!question)
                res.status(400).json({ error: 'Não foi possível encontrar a questão!' });

            await question.updateOne(req.body);
            res.status(200).json({ message: 'Questão atualizada!' });
        } catch (error) {
            res.status(400).json({ error: 'Ocorreu um problema ao atualizar a questão!' });
        }
    }
    // deleta itens do banco 
    deleteQuestions = async (req: Request, res: Response) => {
        try {
            await FinalQuestions.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Questões deletadas com sucesso!" });
        } catch (error) {
            res.status(400).json({ message: "Falha ao deletar questões!" });
        }
    }
}
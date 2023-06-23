import { Injectable , NotFoundException} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma:PrismaService){}

    async findOne(email: string): Promise<User | undefined>{
        const user = await.this.prisma.user.findUnique({
            where: {email},
        })
    }
    if(!user){
        throw new NotFoundException();
    }

    return user;

}

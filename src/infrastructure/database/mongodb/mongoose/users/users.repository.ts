import {
  IUsersRepository,
  LimitType,
} from 'src/domain/users/users.repository.interface';
import { BaseRepository } from '../base.repository';
import { UsersModel } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class UsersRepository
  extends BaseRepository<UsersModel>
  implements IUsersRepository
{
  constructor(
    @InjectModel(UsersModel.name)
    private readonly usersModel: Model<UsersModel>,
  ) {
    super(usersModel);
  }

  async countActiveUsers(): Promise<number> {
    // return await this.usersModel.countDocuments({ isActive: true });

    const count = await this.usersModel.aggregate([
      { $match: { isActive: true } },
      { $count: 'activeUsers' },
    ]);

    return count[0].activeUsers;
  }

  async averageAge(): Promise<any> {
    const average = await this.usersModel.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: '$age' },
        },
      },
    ]);
    return average;
  }

  async favoriteFruits(limitType: LimitType) {
    const limit = parseInt(limitType.limit.toString());
    const fruits = this.usersModel.aggregate([
      {
        $group: {
          _id: '$favoriteFruit',
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: limit,
      },
    ]);

    return fruits;
  }

  async groupByGender() {
    return await this.usersModel.aggregate([
      {
        $group: {
          _id: '$gender',
          count: {
            $sum: 1,
          },
        },
      },
    ]);
  }

  async countByCountry() {
    return await this.usersModel.aggregate([
      {
        $group: {
          _id: '$company.location.country',
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 1,
      },
    ]);
  }

  async getAllEyeColors() {
    return await this.usersModel.aggregate([
      {
        $group: {
          _id: '$eyeColor',
        },
      },
    ]);
  }

  async getAverageTags() {
    // return await this.usersModel.aggregate([
    //   {
    //     $unwind: '$tags',
    //   },
    //   {
    //     $group: {
    //       _id: '$_id',
    //       count: {
    //         $sum: 1,
    //       },
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: null,
    //       averageTags: {
    //         $avg: '$count',
    //       },
    //     },
    //   },
    // ]);

    return await this.usersModel.aggregate([
      {
        $addFields: {
          amountTags: {
            $size: { $ifNull: ['$tags', 0] },
          },
        },
      },
      {
        $group: {
          _id: null,
          averageTags: {
            $avg: '$amountTags',
          },
        },
      },
    ]);
  }

  async countTags(tag: string): Promise<unknown> {
    // return this.usersModel.aggregate([
    //   {
    //     $match: {
    //       tags: tag,
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: null,
    //       count: {
    //         $sum: 1,
    //       },
    //     },
    //   },
    // ]);

    return this.usersModel.aggregate([
      {
        $match: {
          tags: tag,
        },
      },
      {
        $count: `usersWithTag-${tag}`,
      },
    ]);
  }
}

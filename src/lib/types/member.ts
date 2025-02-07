import { MemberStatus, MemberType } from "../enums/member.enum";


export interface Member {
    _id: string;
    memberType: MemberType
    emberStatus: MemberStatus
    memberNick: string
    memberPhone: string
    memberPassword?: string
    memberAddress?:string
    memberDesc?: string
    memberImage?: string
    memberPoints: number
    createdAt: Date;
    updatedAt: Date;
}


export interface MemberInput {
    memberType?: MemberType
    emberStatus?: MemberStatus
    memberNick: string
    memberPhone: string
    memberPassword: string
    memberAddress?:string
    memberDesc?: string
    memberImage?: string
    memberPoints?: number
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}


export interface MemberUpdateInput {
    memberNick?: string
    memberPhone?: string
    memberPassword?: string
    memberAddress?:string
    memberDesc?: string
    memberImage?: string
}

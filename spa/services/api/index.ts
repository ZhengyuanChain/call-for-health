import http from '~/services/http'
import { IUser, IAttachment, IRequirement } from '~/services/interface'

export const getRequirements = (): Promise<IRequirement[]> => http.get('/requirements')

export const getRequirement = (id:number): Promise<IRequirement> => http.get('/requirements/' + id)

export const getMe = (): Promise<IUser> => http.get('/account/me')

export const getMyRequirements = (): Promise<IRequirement[]> => http.get('/account/me/requirements')

export const getAttachments = (id:number): Promise<IAttachment[]> => http.get(`/requirements/${id}/attachments`)

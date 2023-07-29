// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RequestType, Department, Requests, TeamMember, TeamMemberDepartment } = initSchema(schema);

export {
  RequestType,
  Department,
  Requests,
  TeamMember,
  TeamMemberDepartment
};
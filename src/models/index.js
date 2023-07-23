// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Department, Requests, TeamMember, TeamMemberDepartment } = initSchema(schema);

export {
  Department,
  Requests,
  TeamMember,
  TeamMemberDepartment
};
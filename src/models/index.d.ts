import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly departmentName?: string | null;
  readonly requestType?: string | null;
  readonly teammembers?: (TeamMemberDepartment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly departmentName?: string | null;
  readonly requestType?: string | null;
  readonly teammembers: AsyncCollection<TeamMemberDepartment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Department = LazyLoading extends LazyLoadingDisabled ? EagerDepartment : LazyDepartment

export declare const Department: (new (init: ModelInit<Department>) => Department) & {
  copyOf(source: Department, mutator: (draft: MutableModel<Department>) => MutableModel<Department> | void): Department;
}

type EagerRequests = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Requests, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phoneNumber?: string | null;
  readonly emailAddress?: string | null;
  readonly requestType?: string | null;
  readonly requestMessage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequests = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Requests, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phoneNumber?: string | null;
  readonly emailAddress?: string | null;
  readonly requestType?: string | null;
  readonly requestMessage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Requests = LazyLoading extends LazyLoadingDisabled ? EagerRequests : LazyRequests

export declare const Requests: (new (init: ModelInit<Requests>) => Requests) & {
  copyOf(source: Requests, mutator: (draft: MutableModel<Requests>) => MutableModel<Requests> | void): Requests;
}

type EagerTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly emailAddress?: string | null;
  readonly photo?: string | null;
  readonly position?: string | null;
  readonly departmentId?: string | null;
  readonly Departments?: (TeamMemberDepartment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly emailAddress?: string | null;
  readonly photo?: string | null;
  readonly position?: string | null;
  readonly departmentId?: string | null;
  readonly Departments: AsyncCollection<TeamMemberDepartment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamMember = LazyLoading extends LazyLoadingDisabled ? EagerTeamMember : LazyTeamMember

export declare const TeamMember: (new (init: ModelInit<TeamMember>) => TeamMember) & {
  copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember>) => MutableModel<TeamMember> | void): TeamMember;
}

type EagerTeamMemberDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMemberDepartment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly departmentId?: string | null;
  readonly teamMemberId?: string | null;
  readonly department: Department;
  readonly teamMember: TeamMember;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamMemberDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMemberDepartment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly departmentId?: string | null;
  readonly teamMemberId?: string | null;
  readonly department: AsyncItem<Department>;
  readonly teamMember: AsyncItem<TeamMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamMemberDepartment = LazyLoading extends LazyLoadingDisabled ? EagerTeamMemberDepartment : LazyTeamMemberDepartment

export declare const TeamMemberDepartment: (new (init: ModelInit<TeamMemberDepartment>) => TeamMemberDepartment) & {
  copyOf(source: TeamMemberDepartment, mutator: (draft: MutableModel<TeamMemberDepartment>) => MutableModel<TeamMemberDepartment> | void): TeamMemberDepartment;
}
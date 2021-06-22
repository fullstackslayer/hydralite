import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateNestedManyWithoutProjectInput } from "../inputs/PostGroupCreateNestedManyWithoutProjectInput";
import { UserCreateNestedManyWithoutAllProjectsInput } from "../inputs/UserCreateNestedManyWithoutAllProjectsInput";
import { UserCreateNestedManyWithoutLikedProjectsInput } from "../inputs/UserCreateNestedManyWithoutLikedProjectsInput";
import { UserCreateNestedOneWithoutOwnedProjectsInput } from "../inputs/UserCreateNestedOneWithoutOwnedProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logoUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bannerUrl!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnedProjectsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwnedProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutAllProjectsInput, {
    nullable: true
  })
  members?: UserCreateNestedManyWithoutAllProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProjectsInput, {
    nullable: true
  })
  likers?: UserCreateNestedManyWithoutLikedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  postGroups?: PostGroupCreateNestedManyWithoutProjectInput | undefined;
}
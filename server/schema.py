import graphene
from graphene_django import DjangoObjectType
import graphql_jwt
import server.users.schema
import server.core.schema
from graphql_auth.schema import UserQuery, MeQuery


class Query(UserQuery, MeQuery, server.core.schema.PostsQuery, graphene.ObjectType):
    pass


class Mutation(server.users.schema.AuthMutation, server.users.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)

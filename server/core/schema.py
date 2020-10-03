import graphene
from graphene_django import DjangoObjectType

from .models import Post


class PostType(DjangoObjectType):
    class Meta:
        model = Post


class PostsQuery(graphene.ObjectType):
    posts = graphene.List(PostType)
    post = graphene.Field(PostType, id=graphene.String())

    def resolve_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolve_post(self, info, id):
        return Post.objects.get(pk=id)

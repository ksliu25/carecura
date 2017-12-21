from applications.models import Application
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from applications.serializers import ApplicationSerializer


class ApplicationList(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ApplicationDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        return Application.objects.all().filter(user=self.request.user)
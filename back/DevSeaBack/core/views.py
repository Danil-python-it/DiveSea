from django.shortcuts import render
from .models import Lead, GeeksModel
from rest_framework import generics
from .serializers import LeadSerializer, GeekSerializer

# Create your views here.
class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class GeekListCreate(generics.ListCreateAPIView):
    queryset = GeeksModel.objects.all()
    serializer_class = GeekSerializer
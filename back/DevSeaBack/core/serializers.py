from rest_framework import serializers
from .models import Lead, GeeksModel

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id',"name",'email','message')

class GeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeeksModel
        fields = ("id",'title','description')
from rest_framework import serializers

from applications.models import Application

class ApplicationSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Application
        fields = ('url', 'id', 'created', 'name', 'user')
        extra_kwargs = {
            'url': {
                'view_name': 'applications:application-detail',
            }
        }
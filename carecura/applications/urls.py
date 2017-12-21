from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from applications import views

urlpatterns = [
    url(r'^applications/$', views.ApplicationList.as_view(), name='application-list'),
    url(r'^applications/(?P<pk>[0-9]+)/$', views.ApplicationDetail.as_view(), name='application-detail'),
]
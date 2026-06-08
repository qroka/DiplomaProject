from django.urls import path, include
from django.conf import settings
from django.views.static import serve
from api.adminsite import custom_admin_site

urlpatterns = [
    path('admin/', custom_admin_site.urls),
    path('api/', include('api.urls')),
    path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
]
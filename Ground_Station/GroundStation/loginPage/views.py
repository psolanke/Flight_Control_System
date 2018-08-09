from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .forms import NameForm
import requests
import json
from . import strings
from rest_framework.views import APIView
from rest_framework.response import Response

class LoginPage(APIView):
    def post(self, request):
        
        url = json.loads(request.body.decode('utf-8'))['url']
        response_dict = self.connect(url)
        if response_dict[strings.SUCCESS_KEY] == True:
            request.session['url'] = url
            request.session['is_connected'] = True
            global_namespace = response_dict['param_info']['param_value']
            request.session['global_namespace'] = global_namespace
            success = True
        else:
            success = False
            global_namespace = ''
        response = {
            strings.GLOBAL_NAMESPACE_RESPONSE_KEY : global_namespace,
            strings.SUCCESS_KEY : success
        }
        return JsonResponse(response)

    def connect(self, url):
        try:
            response = requests.get(strings.GLOBAL_NAMESPACE_URL.format(url))
            response_dict = response.json()
        except:
            response_dict = {strings.SUCCESS_KEY : False}
        return response_dict
    




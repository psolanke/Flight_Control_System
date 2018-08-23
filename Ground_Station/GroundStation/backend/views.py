import sys 
sys.path.append('../')
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import requests
import json
import strings 
from rest_framework.views import APIView
from rest_framework.response import Response

class ArmDevice(APIView):
    def post(self, request):
        print('\n\nArm API')
        url = request.session['url']
        global_namespace = request.session['global_namespace']
        response_dict = self.connect(url, global_namespace)
        print(response_dict)
        success = False
        global_namespace = ''
        response = {
            strings.GLOBAL_NAMESPACE_RESPONSE_KEY : global_namespace,
            strings.SUCCESS_KEY : success
        }
        return JsonResponse(response)

    def connect(self, url, global_namespace):
        try:
            response = requests.get(strings.ARM_API_URL.format(url, global_namespace))
            response_dict = response.json()
        except:
            response_dict = {strings.SUCCESS_KEY : False}
        return response_dict

class TakeOff(APIView):
    def post(self, request):
        print('\n\nTakeoff API: ')
        url = request.session['url']
        global_namespace = request.session['global_namespace']
        takeoff_alt = json.loads(request.body.decode('utf-8'))['takeoff_alt']
        print(float(takeoff_alt))
        response_dict = self.connect(url, global_namespace, float(takeoff_alt))
        print(response_dict)
        return JsonResponse(response_dict)

    def connect(self, url, global_namespace, takeoff_alt):
        url = strings.TAKEOFF_API_URL.format(url, global_namespace)
        payload = {'takeoff_alt': takeoff_alt}
        try:
            response = requests.get(url, data=json.dumps(payload))
            response_dict = response.json()
        except:
            response_dict = {strings.SUCCESS_KEY : False}
        return response_dict

class Land(APIView):
    def post(self, request):
        print('\n\nLand API: ')
        url = request.session['url']
        global_namespace = request.session['global_namespace']
        response_dict = self.connect(url, global_namespace)
        print(response_dict)
        return JsonResponse(response_dict)

    def connect(self, url, global_namespace):
        url = strings.LAND_API_URL.format(url, global_namespace)
        payload = {}
        try:
            response = requests.get(url, data=json.dumps(payload))
            response_dict = response.json()
        except:
            response_dict = {strings.SUCCESS_KEY : False}
        return response_dict    

    




from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from .forms import NameForm
import requests
from . import strings
from rest_framework.views import APIView
from rest_framework.response import Response

class LoginPage(APIView):
    def post(self, request):
        # form = NameForm(request.POST)
        # if form.is_valid():
        print(type(request.POST))
        #     response_dict = self.connect(form.cleaned_data['url'])
        #     if response_dict[strings.SUCCESS_KEY] == True:
        #         request.session['url'] = form.cleaned_data['url']
        #         request.session['is_connected'] = True
        #         request.session['global_namespace'] = response_dict['param_info']['param_value']
        #         return HttpResponseRedirect('/gs')
        # success = strings.CONNECTION_ERROR_MESSAGE            
        # context = {
        #     strings.FORM_KEY : form,
        #     strings.TITLE_KEY : strings.LOGIN_PAGE_TITLE,
        #     strings.SUCCESS_KEY : success
        # }
        # return Response(context)
        # return render(request, strings.LOGINPAGE_TEMPLATE, context)
    # def get(self, request):
    #     form = NameForm()
    #     success = None
    #     context = {
    #         strings.FORM_KEY : form,
    #         strings.TITLE_KEY : strings.LOGIN_PAGE_TITLE,
    #         strings.SUCCESS_KEY : success
    #     }
    #     return render(request, strings.LOGINPAGE_TEMPLATE, context)

    def connect(self, url):
        try:
            response = requests.get(strings.GLOBAL_NAMESPACE_URL.format(url))
            response_dict = response.json()
        except:
            response_dict = {strings.SUCCESS_KEY : False}
        return response_dict
    




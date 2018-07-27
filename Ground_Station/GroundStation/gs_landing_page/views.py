from django.shortcuts import render

# Create your views here.
def default(request):

    context = {
        'title' : 'Thank You',
        'message': request.session['global_namespace']
    }

    return render(request, 'gs_landing_page/default.html', context)
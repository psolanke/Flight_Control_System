from django import forms

class NameForm(forms.Form):

    url = forms.URLField(label='', widget=forms.TextInput(attrs={'placeholder' : 'Enter URL'}))
from django import forms

from .models import Department, Vacancy
from .ofo import OFO_CHOICES_WITH_EMPTY, OFO_NAMES


def _configure_ofo_select(field, *, label, help_text=''):
    field.label = label
    field.help_text = help_text
    field.widget = forms.Select(choices=OFO_CHOICES_WITH_EMPTY)


class VacancyAdminForm(forms.ModelForm):
    class Meta:
        model = Vacancy
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        _configure_ofo_select(
            self.fields['branch'],
            label='Подразделение',
            help_text='Отраслевой (функциональный) орган из утверждённого списка',
        )

    def clean_branch(self):
        value = (self.cleaned_data.get('branch') or '').strip()
        if value and value not in OFO_NAMES:
            raise forms.ValidationError('Выберите подразделение из списка ОФО.')
        return value


class DepartmentAdminForm(forms.ModelForm):
    class Meta:
        model = Department
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        _configure_ofo_select(
            self.fields['vacancy_branch'],
            label='Подразделение для вакансий',
            help_text='ОФО из списка — должно совпадать с подразделением в вакансиях',
        )

    def clean_vacancy_branch(self):
        value = (self.cleaned_data.get('vacancy_branch') or '').strip()
        if value and value not in OFO_NAMES:
            raise forms.ValidationError('Выберите подразделение из списка ОФО.')
        return value

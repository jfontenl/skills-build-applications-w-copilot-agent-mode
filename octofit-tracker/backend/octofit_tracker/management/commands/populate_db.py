from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models

from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        User = get_user_model()
        # Borrar datos existentes en orden correcto (dependientes primero)
        # Las colecciones ya están vacías, solo poblar datos

        # Crear equipos
        marvel = Team.objects.create(name='Team Marvel')
        dc = Team.objects.create(name='Team DC')

        # Crear usuarios
        ironman = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='password', team=marvel)
        captain = User.objects.create_user(username='captain', email='captain@marvel.com', password='password', team=marvel)
        batman = User.objects.create_user(username='batman', email='batman@dc.com', password='password', team=dc)
        superman = User.objects.create_user(username='superman', email='superman@dc.com', password='password', team=dc)

        # Crear actividades
        Activity.objects.create(user=ironman, type='Running', duration=30, calories=300)
        Activity.objects.create(user=batman, type='Cycling', duration=45, calories=400)

        # Crear leaderboard
        Leaderboard.objects.create(user=ironman, score=1000)
        Leaderboard.objects.create(user=batman, score=900)

        # Crear workouts
        Workout.objects.create(name='Full Body', description='A full body workout', duration=60)
        Workout.objects.create(name='Cardio Blast', description='High intensity cardio', duration=45)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))

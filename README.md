# React Native Todo List

Une application mobile de gestion de tâches (Todo List), développée avec React Native et Expo.

## Fonctionnalités

- **Créer des tâches** : Ajoutez facilement de nouvelles tâches avec un dialogue intuitif
- **Marquer comme complété** : Cliquez sur une tâche pour la marquer comme terminée/non terminée
- **Filtrage intelligent** :
  - Voir toutes les tâches
  - Afficher uniquement les tâches en cours
  - Afficher uniquement les tâches terminées
- **Persistance des données** : Vos tâches sont automatiquement sauvegardées localement
- **Responsive** : Compatible Android et iOS

## Technologies utilisées

- **React Native** (0.81.5) - Framework de développement mobile
- **Expo** (~54.0) - Plateforme de développement
- **Expo Router** - Navigation file-based
- **TypeScript** - Typage statique
- **AsyncStorage** - Persistance locale des données
- **React Native Dialog** - Dialogues natifs
- **React Native UUID** - Génération d'identifiants uniques

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Pour tester sur appareil : [Expo Go](https://expo.dev/go) sur votre smartphone

## Installation

1. **Cloner le projet**

   ```bash
   git clone git@github.com:pricilliaedou/react-native-todolist.git
   cd react-native-todolist
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npx expo start
   ```

## Lancement sur différentes plateformes

Une fois l'application démarrée avec `npx expo start`, vous pouvez :

- **Android** : Appuyez sur `a` ou exécutez `npm run android`
- **iOS** : Appuyez sur `i` ou exécutez `npm run ios` (Mac uniquement)
- **Web** : Appuyez sur `w` ou exécutez `npm run web`
- **Appareil physique** : Scannez le QR code avec l'app Expo Go

## Structure du projet

```
react-native-todolist/
├── app/                          # Pages de l'application (Expo Router)
│   ├── _layout.tsx              # Layout principal avec navigation
│   └── index.tsx                # Page d'accueil (liste des tâches)
├── components/                   # Composants réutilisables
│   ├── ButtonAdd/               # Bouton d'ajout de tâches
│   ├── CardToDo/                # Carte d'affichage d'une tâche
│   ├── HeaderTitle/             # Titre du header avec logo
│   └── TabBottomMenu/           # Menu de filtrage des tâches
├── stores/                       # Gestion d'état globale
│   └── todoStore.ts             # Store des tâches avec AsyncStorage
├── assets/                       # Images et ressources
│   └── images/
│       └── logoToDo.png         # Logo de l'application
└── package.json                 # Dépendances du projet
```

## Architecture

L'application utilise une architecture simple et efficace :

- **Store global léger** : Un système de store custom avec listeners pour partager l'état entre les composants
- **AsyncStorage** : Persistance automatique des données à chaque modification
- **Expo Router** : Navigation basée sur les fichiers pour une structure claire
- **TypeScript** : Typage strict pour éviter les erreurs

## Utilisation

1. **Ajouter une tâche** : Cliquez sur le bouton `+` en bas de l'écran
2. **Marquer comme terminée** : Cliquez sur une tâche pour changer son statut
3. **Filtrer** : Utilisez les onglets en bas (All / In Progress / Done)
4. **Persistance** : Toutes vos modifications sont automatiquement sauvegardées

## Scripts disponibles

```bash
npm start              # Démarre le serveur Expo
npm run android        # Lance sur émulateur/appareil Android
npm run ios            # Lance sur simulateur/appareil iOS
npm run web            # Lance version web
npm run lint           # Vérifie le code avec ESLint
```

## Dépannage

### L'application ne démarre pas

```bash
# Nettoyer le cache et redémarrer
npx expo start --clear
```

### Erreur AsyncStorage

```bash
# Réinstaller les dépendances
rm -rf node_modules
npm install
```

### Problème avec Metro Bundler

```bash
# Réinitialiser Metro Bundler
npx expo start -c
```

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---

**Note** : Cette application a été créée dans un but pédagogique pour apprendre React Native, TypeScript et la gestion d'état.

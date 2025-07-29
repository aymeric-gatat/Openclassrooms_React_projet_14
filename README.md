# HRnet - Application de Gestion des Employés

HRnet est une application web interne utilisée par WealthHealth pour gérer les dossiers des employés. Ce projet est une refonte de l'application existante, passant de jQuery à React pour améliorer les performances et la maintenabilité.

## Description

Ce projet consiste à convertir l'application HRnet de jQuery à React. L'objectif principal est d'améliorer les performances et la stabilité de l'application en remplaçant les plugins jQuery par des composants React. Les composants suivants ont été convertis :

- Sélecteurs de date
- Fenêtres modales
- Menus déroulants
- Tableaux de données

## Initialisation du Projet

Pour initialiser le projet sur votre machine locale, suivez ces étapes :

### Prérequis

- Node.js
- npm

### Installation

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/aymeric-gatat/Openclassrooms_React_projet_14.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd hrnet-react
   ```

3. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

### Lancement de l'Application

Pour lancer l'application en mode développement, utilisez la commande suivante :
`bash
    npm run dev
    `

Cela démarrera le serveur de développement et vous pourrez accéder à l'application via votre navigateur à l'adresse http://localhost:5173.

### Structure du Projet

Le projet est structuré de la manière suivante :

- src/ : Contient le code source de l'application.
- components/ : Contient les composants React.
- pages/ : Contient les pages de l'application.
- styles/ : Contient les fichiers de style.
- public/ : Contient les fichiers statiques.
- package.json : Fichier de configuration des dépendances et scripts npm.

### Tests de Performance

Des tests de performance ont été réalisés à l'aide de Lighthouse pour comparer les performances de l'application avant et après la conversion à React. Les rapports de performance sont disponibles dans le répertoire reports/.

### Contribution

Pour contribuer à ce projet, veuillez suivre les étapes suivantes :

1. Fork le dépôt.
2. Créez une nouvelle branche pour vos modifications.
3. Faites vos modifications et commitez-les.
4. Poussez vos modifications sur votre fork.
5. Créez une pull request vers le dépôt principal.

### Auteurs

Aymeric Gatat

### Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
N'hésitez pas à personnaliser ce fichier `README.md` selon vos besoins spécifiques et les détails supplémentaires que vous souhaitez inclure.

# 📜 Description du Code HTML pour le Profil du Personnage

Ce fichier HTML affiche un profil de personnage de jeu vidéo avec des informations telles que le niveau, la santé, l'expérience et les ressources. Le design utilise les bibliothèques Bootstrap et Font Awesome pour une mise en page moderne et des icônes élégantes.

## 🌟 Structure du Code

1. **En-tête HTML** :
   - 📄 Déclaration du type de document HTML et définition des métadonnées de base.
   - 📚 Inclusion des feuilles de style Bootstrap et Font Awesome pour la mise en page et les icônes.

2. **Corps du Document** :
   - 📦 Utilisation de la classe `container` de Bootstrap pour centrer le contenu et appliquer des marges.
   - ➡️ Création d'une section de profil avec une disposition en flex (`d-flex`) pour aligner les éléments horizontalement.

3. **🖼️ Image du Personnage** :
   - Utilisation de la balise `img` avec des classes Bootstrap pour le style :
     - `border border-primary` : bordure bleue.
     - `bg-light` : fond clair.
   - L'image est un espace réservé (`https://via.placeholder.com/50`) à remplacer par l'image réelle du personnage.

4. **📊 Informations du Profil** :
   - Utilisation de la classe `ml-3` (margin-left) pour espacer l'image et le texte.
   - Affichage du niveau du personnage avec une balise `h3`.

5. **📈 Barres de Progression** :
   - Deux barres de progression pour la santé et l'expérience :
     - La santé utilise la classe `bg-danger` pour une barre rouge remplie à 100%.
     - L'expérience utilise la classe `bg-warning` pour une barre jaune actuellement vide.
   - Les barres de progression sont incluses dans des divs avec la classe `progress`.

6. **🔓 Texte Débloqué** :
   - Affichage d'un message indiquant que le mana est débloqué au niveau 10 avec la classe `text-muted` pour un style de texte grisé.

7. **💎💰 Icônes et Ressources** :
   - Utilisation de `d-flex justify-content-between` pour espacer les icônes de manière égale.
   - Deux icônes de Font Awesome pour les gemmes (`fa-gem`) et les pièces (`fa-coins`) avec des valeurs initiales de 0.

## 🚀 Fonctionnement

- Le fichier HTML charge les bibliothèques Bootstrap et Font Awesome pour fournir des styles prédéfinis et des icônes.
- La mise en page utilise principalement les classes Bootstrap pour aligner les éléments et appliquer des styles.
- Les barres de progression sont stylisées avec les classes Bootstrap pour représenter la santé et l'expérience.
- Les icônes de ressources sont affichées à l'aide de Font Awesome, et les valeurs sont mises à jour dynamiquement si nécessaire.

Pour voir le résultat, copiez le code HTML dans un fichier `.html` et ouvrez-le dans un navigateur web. Vous pouvez remplacer l'URL de l'image par l'image réelle du personnage et ajuster les valeurs des barres de progression et des ressources selon les besoins.

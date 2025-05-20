<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
</head>
<body>
    <h2>Connexion</h2>
    <form method="post" action="login">
        Nom d'utilisateur : <input type="text" name="username" /><br/>
        Mot de passe : <input type="password" name="password" /><br/>
        <input type="submit" value="Se connecter" />
    </form>
    <p style="color:red;">
        ${erreur}
    </p>
</body>
</html>

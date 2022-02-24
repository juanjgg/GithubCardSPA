export class UserGit {
    id?: number;
    login: string;
    avatar_url: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZJIwdCzYcPsSf2voQZjpVaWsqJExllvZDg&usqp=CAU";
    created_at: Date;
    name: string = "No registra Nombre";
    location: string= "No registra Locación";
    twitter_username: string = "No registra Twitter";
    blog: string = "No registra Blog";
    public_repos: number;
    followers: number;
    following: number;
}
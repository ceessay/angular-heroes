import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetching heroes");
    return of(HEROES);
  }
}

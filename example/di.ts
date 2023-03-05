import { Injectable, Injector, Inject } from '../index'

/**
 * ...
 */
@Injectable()
class AnimalService {
    public cat(): string {
        return 'meow'
    }
}

/**
 * ...
 */
class Animal {
    constructor(@Inject(AnimalService) private readonly animalService: AnimalService) {}

    public cat(): string {
        return this.animalService.cat()
    }
}

// NOTE: Testing purpose.
const animal = Injector.get(Animal)
console.log(animal.cat())

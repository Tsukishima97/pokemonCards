
export interface PokeApiCallPkmnByName {
    abilities: abilitiesInterface[];
    base_experience: string;
    cries: criesInterface;
    forms: basicObj[];
    game_indices: gameIndicesInterface[];
    height: number;
    held_items: heldItemsInterface[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: movesInterface[];
    name: string;
    order: number;
    past_abilities: any;
    past_types: any;
    species: basicObj;
    sprites: spritesInterface; 
    stats: statsInterface[];
    types: typeInterface[];
    weight: number;
}

export interface abilitiesInterface {
    ability: basicObj;
    is_hidden: boolean;
    slot: number;
}

export interface criesInterface {
    lates: string;
    legacy: string;
}

export interface gameIndicesInterface {
    game_index: number;
    version: basicObj;
}

export interface heldItemsInterface {
    item: basicObj;
    version_details: versionDetails[];
}

export interface versionDetails {
    rarity: number;
    version: basicObj;
}

export interface movesInterface {
    move: basicObj;
    version_group_details: versionGroupDetailsInterface[];
}

export interface versionGroupDetailsInterface {
    level_learned_at: number;
    move_learn_method: basicObj;
    version_group: basicObj;
}

export interface spritesInterface { 
    //Esta interfaz no la hago completa porque son demasiadas versiones de los sprites y con la default y shiny es suficiente
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface statsInterface {
    base_stat: number;
    effort: number;
    stat: basicObj;
}

export interface typeInterface {
    slot: number;
    type: basicObj;
}


/* Interfaz para la llamada a la API para obtener una lista de pokemons por region (solo hay dos habilitadas: kanto y hoenn)*/
export interface PokeApiCallByRegion {
    descriptions: pokeDescriptions[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: pokeNames[];
    pokemon_entries: pokeEntries[];
    region: basicObj;
    version_groups: basicObj[];
}

export interface pokeDescriptions {
    description: string,
    language: basicObj;
}

export interface pokeNames {
    language: basicObj;
    name: string;
}

export interface pokeEntries {
    entry_number: number;
    pokemon_species: basicObj;
}

export interface basicObj {
    name: string;
    url: string;
}

// Funcion de inicializacion 
export function crearPokeApiCallByRegionDefault(): PokeApiCallByRegion {
    return {
      descriptions: [],
      id: 0,
      is_main_series: false,
      name: '',
      names: [],
      pokemon_entries: [],
      region: {
        name: '',
        url: ''
      },
      version_groups: []
    };
  }
  
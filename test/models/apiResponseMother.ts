import ApiResponse from '../../src/models/apiResponse';
import Character from '../../src/models/character';
import ResponseInfoMother from './responseInfoMother';
import CharacterMother from './characterMother';
import Episode from '../../src/models/episode';
import Location from '../../src/models/location';
import EpisodeMother from './episodeMother';
import LocationMother from './locationMother';

export default class ApiResponseMother {
  public static character(): ApiResponse<Character> {
    return {
      info: ResponseInfoMother.default(),
      results: [CharacterMother.default()],
    };
  }

  public static episode(): ApiResponse<Episode> {
    return {
      info: ResponseInfoMother.default(),
      results: [EpisodeMother.default()],
    };
  }

  public static location(): ApiResponse<Location> {
    return {
      info: ResponseInfoMother.default(),
      results: [LocationMother.default()],
    };
  }
}

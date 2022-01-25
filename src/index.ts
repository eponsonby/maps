/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();
const content = 'string';
customMap.addMarker(user);
customMap.addMarker(company);

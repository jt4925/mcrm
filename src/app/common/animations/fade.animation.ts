import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  state
} from '@angular/animations';



export const routeAnimation =
trigger('routeAnimations', [
  transition(
    '* => *',
    [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: '0',
        })
      ], { optional: true }),

      query(':enter', [
        animate('.3s', style({
          opacity: '1',
        }))
      ], { optional: true }),
    ]
  ),

])

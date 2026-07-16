<template>
	<v-container class='' fluid>
		<v-row class='mt-4 justify-center' cols='12' density='compact'>

			<v-col cols='12' md='10'>

				<AppHeader />

				<v-row class='justify-center'>
					<v-col cols='12'>
						<AppThanks />
					</v-col>
				</v-row>

				<v-row class='justify-center'>
					<v-col cols='12' md='6'>
						<OnlineStatus />
					</v-col>

					<v-col cols='12' md='6'>
						<RateLimits />
					</v-col>

				</v-row>

				<v-row class='justify-center'>

					<v-col cols='12' md='6'>
						<GetRoutes />
					</v-col>

					<v-col cols='12' md='6'>
						<PatchRoutes />
					</v-col>

				</v-row>

				<v-row v-for='(item, index) in components_get' :id='item.id' :key='index' class='justify-center'>
					<v-col cols='12'>
						<component :is='item.component' />
					</v-col>
				</v-row>

				<v-row v-for='(item, index) in components_patch' :id='item.id' :key='index' class='justify-center'>
					<v-col cols='12'>
						<component :is='item.component' />
					</v-col>
				</v-row>

			</v-col>
		</v-row>

	</v-container>
</template>

<script setup lang="ts">
import AircraftCallsignRoute from '@/components/Routes/Get/AircraftCallsignRoute.vue'
import AircraftRoute from '@/components/Routes/Get/AircraftRoute.vue'
import AirlineRoute from '@/components/Routes/Get/AirlineRoute.vue'
import CallsignRoute from '@/components/Routes/Get/CallsignRoute.vue'
import ModeSRoute from '@/components/Routes/Get/ModeSRoute.vue'
import NNumberRoute from '@/components/Routes/Get/NNumberRoute.vue'
import OnlineRoute from '@/components/Routes/Get/OnlineRoute.vue'
import StatsRoute from '@/components/Routes/Get/StatsRoute.vue'
import AircraftPatch from '@/components/Routes/Patch/AircraftPatch.vue'
import CallsignPatch from '@/components/Routes/Patch/CallsignPatch.vue'
import { ID_ROUTES } from '@/types'

const components_get = [
	{ component: AircraftRoute, id: ID_ROUTES.Get.Aircraft },
	{ component: CallsignRoute, id: ID_ROUTES.Get.Callsign },
	{ component: AircraftCallsignRoute, id: ID_ROUTES.Get.AircraftCallsign },
	{ component: AirlineRoute, id: ID_ROUTES.Get.Airline },
	{ component: NNumberRoute, id: ID_ROUTES.Get.NNumber },
	{ component: ModeSRoute, id: ID_ROUTES.Get.ModeS },
	{ component: OnlineRoute, id: ID_ROUTES.Get.Online },
	{ component: StatsRoute, id: ID_ROUTES.Get.Stats },
]

const components_patch = [
	{ component: AircraftPatch, id: ID_ROUTES.Patch.Aircraft },
	{ component: CallsignPatch, id: ID_ROUTES.Patch.Callsign },
]

</script>

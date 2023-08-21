import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
import {
	todoFromDtoServiceArray,
	todoFromDtoServiceObject,
} from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils.service/validateStatus";
import baseQueryWithReAuth from "../../../../../../services/utils.service/baseQueryWithReAuth";
import url from "../../services/url/index";

export interface Props {
	authToken: string;
}

export interface PropsPost {
	payload: any;
}

export const pirsingApi = createApi({
	reducerPath: `${reducerPaths.pirsing}/api`,
	baseQuery: baseQueryWithReAuth,
	tagTypes: [`${reducerPaths.pirsing}TAG`],

	endpoints: (build) => ({
		getPirsing: build.query<any, Props>({
			query: ({ authToken }) => ({
				url: url.pirsing,
				method: httpMethods.GET,
				headers: {
					"X-ACCESS-KEY": ` ${authToken}`,
				},
				validateStatus,
			}),
			providesTags: [`${reducerPaths.pirsing}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
	}),
});

export const {
	useGetPirsingQuery,
	useLazyGetPirsingQuery,
	// usePostPirsingMutation,
} = pirsingApi;

import React from "react";

import { cn } from "@/utils";

type Props = {
  name: "ts" | "js" | "html" | "css" | "bash" | "tsx" | "jsx" | "json";
  className?: string;
};

export default function TechIcons({ name, className }: Props) {
  const iconClassName = "w-[14px]";

  const currentIcon = {
    ts: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M17.4269 0.575686H1.23576C1.18269 0.575686 1.13013 0.586152 1.0811 0.606486C1.03207 0.62682 0.987531 0.656622 0.950032 0.694187C0.912532 0.731752 0.882808 0.776343 0.862561 0.825408C0.842313 0.874473 0.831939 0.927049 0.832032 0.980128V17.1712C0.831939 17.2244 0.842336 17.277 0.862628 17.3261C0.88292 17.3752 0.912707 17.4199 0.950282 17.4574C0.987856 17.495 1.03248 17.5248 1.08159 17.5451C1.1307 17.5654 1.18334 17.5758 1.23647 17.5757H17.4276C17.4807 17.5758 17.5334 17.5654 17.5825 17.5451C17.6316 17.5248 17.6762 17.495 17.7138 17.4574C17.7514 17.4199 17.7811 17.3752 17.8014 17.3261C17.8217 17.277 17.8321 17.2244 17.832 17.1712V0.979419C17.832 0.926281 17.8215 0.873665 17.8012 0.824589C17.7808 0.775514 17.7509 0.730943 17.7133 0.693435C17.6756 0.655926 17.631 0.626217 17.5818 0.606011C17.5327 0.585805 17.48 0.5755 17.4269 0.575686ZM10.9509 9.66039H8.92723V15.9558H7.30805V9.66039H5.28443V8.26574H10.9509V9.66039ZM11.4042 15.596V13.9138C11.4042 13.9138 12.3236 14.6065 13.4264 14.6065C14.5292 14.6065 14.4867 13.8854 14.4867 13.7863C14.4867 12.7401 11.3617 12.7401 11.3617 10.4211C11.3617 7.26774 15.9154 8.51223 15.9154 8.51223L15.8587 10.011C15.8587 10.011 15.0951 9.50173 14.2324 9.50173C13.3697 9.50173 13.0588 9.91255 13.0588 10.3503C13.0588 11.4814 16.2121 11.3688 16.2121 13.6453C16.2121 17.1514 11.4042 15.5967 11.4042 15.5967"
          fill="currentColor"
        />
      </svg>
    ),
    js: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M0.832031 0.575684H17.832V17.5757H0.832031V0.575684ZM16.4394 13.5212C16.3155 12.7456 15.8104 12.0939 14.3123 11.4861C13.791 11.2418 13.2116 11.0718 13.0394 10.6786C12.975 10.4449 12.9651 10.3174 13.0069 10.1793C13.1131 9.72168 13.655 9.58427 14.08 9.71177C14.3562 9.79677 14.6112 10.0093 14.7713 10.3493C15.5037 9.87043 15.5037 9.87043 16.0144 9.55239C15.8232 9.25489 15.7283 9.12668 15.5994 8.99989C15.1531 8.50052 14.5588 8.24552 13.5919 8.26748L13.0926 8.33052C12.6137 8.44739 12.1576 8.70239 11.8813 9.04239C11.0738 9.95685 11.3069 11.5506 12.2844 12.2093C13.2512 12.9318 14.6651 13.0905 14.8457 13.7712C15.0157 14.6 14.2294 14.8656 13.4531 14.77C12.8787 14.6425 12.5606 14.3549 12.21 13.8236L10.9137 14.5681C11.0625 14.9081 11.2325 15.0561 11.4875 15.3536C12.72 16.5975 15.8012 16.5337 16.3544 14.6425C16.375 14.5787 16.5244 14.1431 16.4069 13.4737L16.4394 13.5212ZM10.0765 8.38931H8.48416C8.48416 9.76206 8.47778 11.1263 8.47778 12.5012C8.47778 13.3739 8.52241 14.175 8.38003 14.4215C8.14628 14.9095 7.5442 14.8472 7.27078 14.7615C6.99028 14.6226 6.84791 14.4314 6.68286 14.1559C6.63824 14.0815 6.60495 14.017 6.59291 14.017L5.3002 14.8139C5.51624 15.2601 5.83145 15.6441 6.23803 15.8884C6.84366 16.2497 7.65753 16.3666 8.50966 16.1753C9.06428 16.0152 9.54241 15.6858 9.79245 15.1758C10.1537 14.5171 10.0772 13.7096 10.0737 12.8058C10.0822 11.3509 10.0737 9.89522 10.0737 8.42897L10.0765 8.38931Z"
          fill="currentColor"
        />
      </svg>
    ),
    html: (
      <svg
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M0.832031 0.575684L2.17333 15.7261L8.48203 17.5757L14.829 15.7269L16.132 0.575684H0.832031ZM12.7737 5.71648H5.99578L6.14198 7.43008H12.6844L12.1523 13.0103L8.54323 14.1842L4.90438 12.9474L4.65958 10.4552H6.37998L6.51598 11.6546L8.55598 12.3473L10.5501 11.6988L10.8025 9.14453H4.58563L4.10793 4.00203H12.9581L12.7737 5.71648Z"
          fill="currentColor"
        />
      </svg>
    ),
    css: (
      <svg
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M0.131836 0.575684L1.47314 15.7346L7.78184 17.5757L14.1296 15.7354L15.4318 0.575684H0.131836ZM11.4368 13.0894L7.78779 14.1128H7.78184L4.12939 13.0894L3.87694 10.3974H5.66874L5.79624 11.6945L7.78099 12.2377L9.76999 11.6937L9.97824 9.10118H3.79874L3.63979 7.39608H10.1338L10.2817 5.69098H3.46724L3.31764 3.98588H12.2477L11.4368 13.0894Z"
          fill="currentColor"
        />
      </svg>
    ),
    bash: (
      <svg
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M2.8335 12.6174L7.0835 8.36743L2.8335 4.11743"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 14.0339H14.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tsx: (
      <svg
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M11.7317 13.0112C11.2493 13.6965 10.724 14.3505 10.1589 14.9693C11.665 16.4305 13.065 17.1147 13.8419 16.6655C14.6189 16.2171 14.726 14.6623 14.2137 12.6286C13.4458 12.7996 12.6121 12.9302 11.7317 13.0112ZM10.5523 13.0886C9.86984 13.1164 9.18656 13.1164 8.50412 13.0886C8.84263 13.5316 9.18654 13.9421 9.52775 14.3157C9.87046 13.9418 10.212 13.5334 10.5523 13.0886ZM15.0897 5.98084C17.489 6.66866 19.0564 7.81202 19.0564 9.19216C19.0564 10.5723 17.4899 11.7157 15.0906 12.4035C15.6938 14.8253 15.4868 16.7537 14.2921 17.4433C13.0974 18.1338 11.3238 17.3488 9.52775 15.6148C7.73257 17.3479 5.95901 18.1338 4.76432 17.4433C3.56964 16.7528 3.36258 14.8253 3.96577 12.4035C1.5665 11.7175 0 10.5741 0 9.19396C0 7.81382 1.5665 6.67046 3.96577 5.98264C3.36258 3.56086 3.56964 1.63244 4.76432 0.941924C5.95901 0.252303 7.73257 1.03735 9.52775 2.77131C11.3238 1.03735 13.0974 0.252303 14.2921 0.941924C15.4868 1.63244 15.6938 3.56086 15.0906 5.98264M14.2146 5.75937C14.7278 3.72471 14.6198 2.17082 13.8428 1.72157C13.0659 1.27323 11.6659 1.95745 10.1607 3.41862C10.7255 4.03742 11.2505 4.69144 11.7326 5.37674C12.613 5.45777 13.4467 5.58741 14.2146 5.75937ZM4.84265 12.6286C4.33039 14.6632 4.43752 16.2171 5.21537 16.6655C5.99232 17.1138 7.39227 16.4305 8.89755 14.9693C8.33266 14.3502 7.80764 13.6959 7.32564 13.0103C6.49102 12.9354 5.66199 12.8076 4.84355 12.6277M8.50592 5.29752C9.18836 5.26977 9.87164 5.26977 10.5541 5.29752C10.2294 4.8745 9.887 4.4654 9.52775 4.07133C9.18564 4.44645 8.84443 4.85578 8.50412 5.29932M7.32474 5.37764C7.80677 4.69234 8.33179 4.03832 8.89665 3.41952C7.39137 1.95745 5.99142 1.27323 5.21537 1.72157C4.43842 2.17082 4.33039 3.72561 4.84355 5.75937C5.6115 5.58831 6.44516 5.45867 7.32564 5.37674M11.2329 12.1469C11.874 11.2064 12.4439 10.2193 12.938 9.19396C12.4442 8.16861 11.8746 7.18156 11.2338 6.24102C10.0989 6.15618 8.95928 6.15618 7.8244 6.24102C7.18301 7.1815 6.61275 8.16856 6.11836 9.19396C6.61246 10.2193 7.18242 11.2064 7.8235 12.1469C8.95838 12.2317 10.098 12.2317 11.2329 12.1469ZM12.3898 12.0281C12.9443 11.956 13.4695 11.8651 13.9653 11.7553C13.8029 11.2475 13.619 10.7468 13.4143 10.2545C13.0972 10.8593 12.7558 11.451 12.3907 12.0281M6.66753 6.35896C6.11296 6.43158 5.58779 6.52281 5.09203 6.63264C5.24508 7.1164 5.42904 7.61666 5.64391 8.13343C5.96095 7.52862 6.30244 6.93694 6.66753 6.35986M5.09203 11.7562C5.58779 11.8654 6.11296 11.9563 6.66753 12.029C6.30244 11.4519 5.96095 10.8602 5.64391 10.2554C5.43886 10.7477 5.25474 11.2484 5.09203 11.7562ZM4.21155 11.5356C4.44742 10.7848 4.75172 9.99792 5.12084 9.19487C4.76853 8.43463 4.46483 7.65281 4.21155 6.85412C2.194 7.4267 0.901188 8.29818 0.901188 9.19487C0.901188 10.0916 2.194 10.9621 4.21155 11.5356ZM13.9662 6.63264C13.4698 6.52281 12.9446 6.43158 12.3907 6.35896C12.7558 6.93604 13.0972 7.52772 13.4143 8.13253C13.6286 7.61636 13.8125 7.1164 13.9662 6.63264ZM14.8458 6.85322C14.6117 7.60406 14.3056 8.39091 13.9365 9.19396C14.3056 9.99702 14.6117 10.7839 14.8458 11.5347C16.8642 10.9612 18.157 10.0907 18.157 9.19396C18.157 8.29728 16.8642 7.4267 14.8458 6.85322ZM9.52775 10.8856C9.30096 10.893 9.07499 10.8547 8.86329 10.773C8.65159 10.6914 8.45847 10.5679 8.29542 10.4101C8.13237 10.2523 8.00272 10.0633 7.91418 9.8544C7.82564 9.64548 7.78001 9.42088 7.78001 9.19396C7.78001 8.96705 7.82564 8.74245 7.91418 8.53353C8.00272 8.3246 8.13237 8.13561 8.29542 7.9778C8.45847 7.81998 8.65159 7.69657 8.86329 7.61488C9.07499 7.5332 9.30096 7.49492 9.52775 7.50232C9.96685 7.51665 10.3832 7.70115 10.6887 8.01683C10.9943 8.33251 11.1651 8.75463 11.1651 9.19396C11.1651 9.6333 10.9943 10.0554 10.6887 10.3711C10.3832 10.6868 9.96685 10.8713 9.52775 10.8856Z"
          fill="currentColor"
        />
      </svg>
    ),
    jsx: (
      <svg
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          d="M11.7317 13.0112C11.2493 13.6965 10.724 14.3505 10.1589 14.9693C11.665 16.4305 13.065 17.1147 13.8419 16.6655C14.6189 16.2171 14.726 14.6623 14.2137 12.6286C13.4458 12.7996 12.6121 12.9302 11.7317 13.0112ZM10.5523 13.0886C9.86984 13.1164 9.18656 13.1164 8.50412 13.0886C8.84263 13.5316 9.18654 13.9421 9.52775 14.3157C9.87046 13.9418 10.212 13.5334 10.5523 13.0886ZM15.0897 5.98084C17.489 6.66866 19.0564 7.81202 19.0564 9.19216C19.0564 10.5723 17.4899 11.7157 15.0906 12.4035C15.6938 14.8253 15.4868 16.7537 14.2921 17.4433C13.0974 18.1338 11.3238 17.3488 9.52775 15.6148C7.73257 17.3479 5.95901 18.1338 4.76432 17.4433C3.56964 16.7528 3.36258 14.8253 3.96577 12.4035C1.5665 11.7175 0 10.5741 0 9.19396C0 7.81382 1.5665 6.67046 3.96577 5.98264C3.36258 3.56086 3.56964 1.63244 4.76432 0.941924C5.95901 0.252303 7.73257 1.03735 9.52775 2.77131C11.3238 1.03735 13.0974 0.252303 14.2921 0.941924C15.4868 1.63244 15.6938 3.56086 15.0906 5.98264M14.2146 5.75937C14.7278 3.72471 14.6198 2.17082 13.8428 1.72157C13.0659 1.27323 11.6659 1.95745 10.1607 3.41862C10.7255 4.03742 11.2505 4.69144 11.7326 5.37674C12.613 5.45777 13.4467 5.58741 14.2146 5.75937ZM4.84265 12.6286C4.33039 14.6632 4.43752 16.2171 5.21537 16.6655C5.99232 17.1138 7.39227 16.4305 8.89755 14.9693C8.33266 14.3502 7.80764 13.6959 7.32564 13.0103C6.49102 12.9354 5.66199 12.8076 4.84355 12.6277M8.50592 5.29752C9.18836 5.26977 9.87164 5.26977 10.5541 5.29752C10.2294 4.8745 9.887 4.4654 9.52775 4.07133C9.18564 4.44645 8.84443 4.85578 8.50412 5.29932M7.32474 5.37764C7.80677 4.69234 8.33179 4.03832 8.89665 3.41952C7.39137 1.95745 5.99142 1.27323 5.21537 1.72157C4.43842 2.17082 4.33039 3.72561 4.84355 5.75937C5.6115 5.58831 6.44516 5.45867 7.32564 5.37674M11.2329 12.1469C11.874 11.2064 12.4439 10.2193 12.938 9.19396C12.4442 8.16861 11.8746 7.18156 11.2338 6.24102C10.0989 6.15618 8.95928 6.15618 7.8244 6.24102C7.18301 7.1815 6.61275 8.16856 6.11836 9.19396C6.61246 10.2193 7.18242 11.2064 7.8235 12.1469C8.95838 12.2317 10.098 12.2317 11.2329 12.1469ZM12.3898 12.0281C12.9443 11.956 13.4695 11.8651 13.9653 11.7553C13.8029 11.2475 13.619 10.7468 13.4143 10.2545C13.0972 10.8593 12.7558 11.451 12.3907 12.0281M6.66753 6.35896C6.11296 6.43158 5.58779 6.52281 5.09203 6.63264C5.24508 7.1164 5.42904 7.61666 5.64391 8.13343C5.96095 7.52862 6.30244 6.93694 6.66753 6.35986M5.09203 11.7562C5.58779 11.8654 6.11296 11.9563 6.66753 12.029C6.30244 11.4519 5.96095 10.8602 5.64391 10.2554C5.43886 10.7477 5.25474 11.2484 5.09203 11.7562ZM4.21155 11.5356C4.44742 10.7848 4.75172 9.99792 5.12084 9.19487C4.76853 8.43463 4.46483 7.65281 4.21155 6.85412C2.194 7.4267 0.901188 8.29818 0.901188 9.19487C0.901188 10.0916 2.194 10.9621 4.21155 11.5356ZM13.9662 6.63264C13.4698 6.52281 12.9446 6.43158 12.3907 6.35896C12.7558 6.93604 13.0972 7.52772 13.4143 8.13253C13.6286 7.61636 13.8125 7.1164 13.9662 6.63264ZM14.8458 6.85322C14.6117 7.60406 14.3056 8.39091 13.9365 9.19396C14.3056 9.99702 14.6117 10.7839 14.8458 11.5347C16.8642 10.9612 18.157 10.0907 18.157 9.19396C18.157 8.29728 16.8642 7.4267 14.8458 6.85322ZM9.52775 10.8856C9.30096 10.893 9.07499 10.8547 8.86329 10.773C8.65159 10.6914 8.45847 10.5679 8.29542 10.4101C8.13237 10.2523 8.00272 10.0633 7.91418 9.8544C7.82564 9.64548 7.78001 9.42088 7.78001 9.19396C7.78001 8.96705 7.82564 8.74245 7.91418 8.53353C8.00272 8.3246 8.13237 8.13561 8.29542 7.9778C8.45847 7.81998 8.65159 7.69657 8.86329 7.61488C9.07499 7.5332 9.30096 7.49492 9.52775 7.50232C9.96685 7.51665 10.3832 7.70115 10.6887 8.01683C10.9943 8.33251 11.1651 8.75463 11.1651 9.19396C11.1651 9.6333 10.9943 10.0554 10.6887 10.3711C10.3832 10.6868 9.96685 10.8713 9.52775 10.8856Z"
          fill="currentColor"
        />
      </svg>
    ),
    json: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", iconClassName, className)}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.7233 2.08688V0.692883H5.5958C5.15191 0.692883 4.72267 0.780244 4.30805 0.954966C3.89435 1.12709 3.52059 1.38269 3.21014 1.7058C2.90631 2.00945 2.66853 2.37263 2.51172 2.77255V2.77397C2.37062 3.153 2.27642 3.54788 2.23122 3.9498V3.95263C2.19055 4.35881 2.17918 4.7674 2.19722 5.17521C2.21422 5.58605 2.22272 5.99641 2.22272 6.4063C2.22272 6.69341 2.16747 6.96352 2.05697 7.21663C1.84954 7.71183 1.46235 8.11157 0.973223 8.33296C0.723675 8.44087 0.454605 8.49633 0.182724 8.49588H0.0566406V9.88988H0.18414C0.459918 9.88988 0.722473 9.94702 0.971807 10.0613L0.973223 10.0627C1.22539 10.1732 1.44025 10.3234 1.61781 10.5132L1.62064 10.516C1.80575 10.7002 1.95072 10.9198 2.05556 11.1748L2.05697 11.1776C2.16747 11.4326 2.22272 11.6999 2.22272 11.9795C2.22272 12.3903 2.21422 12.8007 2.19722 13.2105C2.18022 13.6289 2.19156 14.0398 2.23122 14.443C2.27844 14.8444 2.37147 15.235 2.51031 15.6118C2.66142 15.999 2.89469 16.356 3.21014 16.68C3.52653 17.0058 3.8925 17.2561 4.30805 17.4308C4.72361 17.6055 5.15333 17.6929 5.59722 17.6929H5.7233V16.2989H5.5958C5.31247 16.2989 5.04661 16.2446 4.79822 16.136C4.55753 16.0239 4.3384 15.8705 4.1508 15.6826C3.96932 15.4878 3.8214 15.2642 3.71305 15.021C3.60917 14.766 3.55722 14.4955 3.55722 14.2093C3.55722 13.8853 3.56242 13.568 3.5728 13.2573C3.58414 12.9343 3.58414 12.6203 3.5728 12.3152C3.56629 12.0116 3.54027 11.7088 3.49489 11.4085C3.44959 11.1126 3.36971 10.8231 3.25689 10.5458C3.03543 10.01 2.67501 9.54292 2.21281 9.19288C2.67553 8.84301 3.03645 8.37596 3.25831 7.83996C3.37164 7.56796 3.45097 7.28368 3.4963 6.98713C3.54353 6.68963 3.5695 6.38741 3.57422 6.08046C3.58555 5.7688 3.58555 5.4543 3.57422 5.13696C3.56289 4.81963 3.55722 4.49946 3.55722 4.17646C3.55476 3.77043 3.67106 3.37253 3.8918 3.03173C4.11254 2.69093 4.42809 2.42209 4.79964 2.2583C5.04934 2.14225 5.32189 2.08368 5.59722 2.08688H5.7233ZM11.39 16.2989V17.6929H11.5175C11.9614 17.6929 12.3906 17.6055 12.8052 17.4308C13.2198 17.2561 13.5858 17.0058 13.9031 16.68C14.2205 16.3541 14.4533 15.9985 14.6015 15.6132C14.7432 15.2354 14.8367 14.8421 14.882 14.436V14.4331C14.9217 14.0365 14.933 13.6289 14.916 13.2105C14.899 12.7997 14.8905 12.3893 14.8905 11.9795C14.8905 11.6923 14.9458 11.4222 15.0563 11.1691V11.1677C15.2637 10.6725 15.6509 10.2742 16.14 10.0528C16.3896 9.94488 16.6587 9.88943 16.9305 9.88988H17.0566V8.49588H16.9291C16.6524 8.49588 16.3894 8.43874 16.14 8.32446L16.1386 8.32304C15.8959 8.21741 15.6767 8.06423 15.494 7.87254L15.4912 7.86971C15.3036 7.68149 15.1557 7.45747 15.0563 7.21096V7.20813C14.9454 6.95539 14.8885 6.68229 14.8891 6.4063C14.8891 5.99546 14.8976 5.5851 14.9146 5.17521C14.9331 4.7641 14.9218 4.35218 14.8806 3.94271C14.8352 3.54374 14.7415 3.15034 14.6015 2.77397V2.77255C14.4443 2.37251 14.2061 2.00932 13.9017 1.7058C13.5913 1.38269 13.2175 1.12709 12.8038 0.954966C12.3964 0.780862 11.9577 0.691684 11.5146 0.692883H11.39V2.08688H11.5175C11.8008 2.08688 12.0662 2.14119 12.3136 2.2498C12.5592 2.36597 12.775 2.51708 12.961 2.70313C13.1405 2.89296 13.2864 3.11349 13.3988 3.36471C13.5027 3.61971 13.5546 3.8903 13.5546 4.17646C13.5546 4.49946 13.5494 4.8168 13.539 5.12846C13.5277 5.45146 13.5277 5.76549 13.539 6.07055C13.5447 6.38505 13.5707 6.68727 13.617 6.97721C13.6642 7.27943 13.7435 7.56702 13.855 7.83996C14.0768 8.37596 14.4377 8.84301 14.9005 9.19288C14.4377 9.54274 14.0768 10.0098 13.855 10.5458C13.7429 10.8199 13.663 11.1061 13.617 11.3986C13.5697 11.6961 13.5438 11.9983 13.539 12.3053C13.5274 12.6197 13.5274 12.9344 13.539 13.2488C13.5504 13.5661 13.556 13.8863 13.556 14.2093C13.5585 14.6153 13.4422 15.0132 13.2215 15.354C13.0007 15.6948 12.6852 15.9637 12.3136 16.1275C12.0639 16.2435 11.7914 16.3021 11.516 16.2989H11.39Z"
          fill="currentColor"
        />
      </svg>
    ),
  }[name];

  if (currentIcon) {
    return currentIcon;
  } else {
    return "No Icon";
  }
}

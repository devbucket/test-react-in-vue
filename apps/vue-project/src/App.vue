<script setup lang="ts">
import {
  AreaChartCard,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ExternalLinkIcon,
  Layout,
  MonitorSmartphoneIcon,
  PageContainer,
  SideDrawer,
  SideDrawerContent,
  SideDrawerTrigger,
  StarIcon,
  Text,
} from '@csq/library/vue'

import { chartData } from './data/chart.data'

const handleClose = () => {
  console.log('Card closed!')
}
</script>

<template>
  <Layout>
    <PageContainer>
      <Text variant="header1" content="Welcome to the Vue App" />

      <div class="flex flex-col gap-4">
        <div class="flex gap-4 justify-between">
          <Text variant="header4" as="h2" content="Your recently viewed" />
        </div>
        <div class="grid grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Text content="50 days ago" />
              <CardTitle className="font-bold text-xl">Speed Analysis Lab</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <SideDrawer>
                <SideDrawerTrigger>
                  <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                    <ExternalLinkIcon className="size-4" />
                    <span>Open Speed Analysis Lab</span>
                  </Button>
                </SideDrawerTrigger>
                <SideDrawerContent title="Speed Analysis Lab" description="Some description">
                  <p>Testing some Content</p>
                </SideDrawerContent>
              </SideDrawer>
              <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                <StarIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Text content="79 days ago" />
              <CardTitle className="font-bold text-xl">Speed Analysis Lab</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                <ExternalLinkIcon className="size-4" />
                <span>Open Speed Analysis Lab</span>
              </Button>
              <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                <StarIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Text content="83 days ago" />
              <CardTitle className="font-bold text-xl">Journey Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline">
                <MonitorSmartphoneIcon className="size-4" />
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                <ExternalLinkIcon className="size-4" />
                <span>Open Journey Analysis</span>
              </Button>
              <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                <StarIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Text content="84 days ago" />
              <CardTitle className="font-bold text-xl">Journey Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline">
                <MonitorSmartphoneIcon className="size-4" />
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                <ExternalLinkIcon className="size-4" />
                <span>Open Journey Analysis</span>
              </Button>
              <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                <StarIcon />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <AreaChartCard :chartData="chartData" />
      </div>
    </PageContainer>
  </Layout>
</template>
